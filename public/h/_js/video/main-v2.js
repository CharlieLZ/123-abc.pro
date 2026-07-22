(function (StarfallStreamVideoMain) {
    var $videoEl,
        $containerEl,
        player,
        isComputer = false,
        videoProgressIntervalId,
        videoWaitCheckIntervalId,
        nRateSent,
        $rotateIcon,
        $rotateIconContainer,
        isPlaying = false,
        isWaiting = false,
        singAlongControls = false,
        $singAlongControls,
        $singAlongPlayBtn,
        $singAlongPauseBtn,
        $singAlongPrevBtn,
        $singAlongNextBtn,
        resizeTimer,
        tabs = [],
        tabsURL,
        currentTab = 0,
        scale = 1,
        singAlongButtonOriginalWidth = 182,
        singAlongButtonOriginalHeight = 90,
        loadPagesFromVTT = false,
        currentPage = 0,
        isPausedByVisibility = false,
        pages = [];
    (singAlongButtonMaxHeight = singAlongButtonOriginalHeight * 0.75),
        (singAlongButtonMaxWidth = singAlongButtonOriginalWidth * 0.75),
        (singAlongButtonMinHeight = singAlongButtonOriginalHeight * 0.2),
        (singAlongButtonMinWidth = singAlongButtonOriginalWidth * 0.2),
        (playingFirstTime = true),
        (timeWhenWait = 0);
    StarfallStreamVideoMain.init = function (containerId, videoId, options) {

        const ua = navigator.userAgent;
        const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        const isIPhone = /iPhone/.test(ua);
        const isIPad = /iPad/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

        if (isSafari && !isTouchDevice) {
            document.documentElement.classList.add('safari-desktop');
        }

        if (isSafari && isTouchDevice && isIPhone && !isIPad) {
            document.documentElement.classList.add('safari-iphone');
        }
        
        var hlsVideoURL = options.HLSVideoURL;
        var mp4VideoURL = options.mp4VideoURL;
        var posterURL = options.poster;
        var captionsURL = options.captionURL;
        var isCaptionsOn = options.isCaptionsOn || false;
        loadPagesFromVTT = options.loadPagesFromVTT;
        if (!captionsURL) {
            loadPagesFromVTT = false;
        }
        tabsURL = options.tabsURL;
        $videoEl = $(videoId);
        $containerEl = $(containerId);
        $rotateIcon = $("#rotate_icon");
        $rotateIconContainer = $("#rotate_icon_container");
        player = videojs(videoId, {
            textTrackSettings: false,
            html5: {
                nativeTextTracks: false,
                textTrackSettings: false,
                disablePictureInPicture: true
            },
            controlBar: {
                fullscreenToggle: false,
                pictureInPictureToggle: false
            },
            playbackRates: [0.5, 1, 1.5, 2],
        });

        player.on('useractive', function(el) {
            document.querySelectorAll('[title]').forEach(function(el) { el.removeAttribute('title');
            });
        });
        if (typeof SpecialDefinitions.AudioVolume != "undefined") {
            player.volume(SpecialDefinitions.AudioVolume / 100);
        }
        //Hack to remove click to pause/play on video. There is no way of
        //doing this directly. So I had to remove events explicitly.
        player.off(player.tech_, "mousedown", player.handleTechClick_);

        player.ready(function () {
            const controlBar = player.getChild('controlBar');
            const children = controlBar.children();
            const rateBtn = controlBar.getChild('playbackRateMenuButton');

            
            const rateDiv = document.createElement('div');
            rateDiv.setAttribute('class','speed-select');
            const rateLabel = document.createElement('label');
            rateLabel.setAttribute('for','rate-select');
            rateLabel.innerText = 'Speed:';
            const rateSelect = document.createElement('select');
            rateSelect.setAttribute('id','rate-select');
            rateSelect.setAttribute('name','speed');
            // rateSelect.setAttribute('aria-label','Playback speed');
            rateSelect.innerHTML = `<option value="1">1x</option>
              <option value="1.3">1.3x</option>
              <option value="1.7">1.7x</option>
              <option value="2">2x</option>`;
            
            rateDiv.append(rateLabel);
            rateDiv.append(rateSelect);

            function updateSpeedBtnSelect() {
                const rate = player.playbackRate();
                rateSelect.value = rate;
            }

            updateSpeedBtnSelect();

            if (rateBtn) {
                const index = children.indexOf(rateBtn);                
                if (children[index]) {
                    player.controlBar.el().insertBefore(rateDiv, player.controlBar.el().children[index]);
                } else {
                    player.controlBar.el().appendChild(rateDiv); // fallback
                }
                controlBar.removeChild(rateBtn);                
            } else {
                player.controlBar.el().appendChild(rateDiv);
            }

            player.on('ratechange', updateSpeedBtnSelect);

            document.querySelectorAll('#speed-modal button[data-rate]').forEach(function(btn) {
                btn.addEventListener('click', function(e) {
                    const rate = parseFloat(e.target.dataset.rate);
                    player.playbackRate(rate);
                    document.getElementById('speed-modal').classList.add('hidden');
                });
            });

            rateSelect.addEventListener('change', function (e) {
                const selectedRate = parseFloat(e.target.value);
                player.playbackRate(selectedRate);
            });
            
            player.controlBar.subsCapsButton.hide();

            if (SpecialDefinitions.captionURL != '') {

                const captionsToggle = document.createElement('div');
                captionsToggle.className = 'cc-switch';
                captionsToggle.innerHTML = `
                      <label for="cc">Captions:</label>
                      <select id="cc">
                        <option value="on">On</option>
                        <option value="off">Off</option>
                      </select>
                `;

                player.controlBar.el().appendChild(captionsToggle);
                
                const cc = document.getElementById('cc');
                if (isCaptionsOn) {
                    cc.value = 'on';
                } else {
                    cc.value = 'off';
                }

                cc.addEventListener('change', function (e) {
                    e.stopPropagation();
                    const target = e.target;

                    // Check if the changed element is the captions <select>
                    if (target.id === 'cc') {
                        const value = target.value; // could be 'on' or 'off'
                        const tracks = player.textTracks();

                        for (let i = 0; i < tracks.length; i++) {
                            if (tracks[i].kind === 'captions' || tracks[i].kind === 'subtitles') {
                                tracks[i].mode = value === 'on' ? 'showing' : 'disabled';
                            }
                        }
                    }
                });
            }

            if (SpecialDefinitions.transcriptLink !== undefined && SpecialDefinitions.transcriptLink !== null && SpecialDefinitions.transcriptLink !== '') {
                $button = $('<a href="' + SpecialDefinitions.transcriptLink + '" class="vjs-custom-button vjs-control vjs-custom-transcript" target="_blank"><img src="/h/_images/video/transcript_icon_new_window.svg" draggable="false" alt="View transcript (opens in a new window)" /></a>');
                $('div.vjs-control-bar').append($button);

            }

            if (typeof SpecialDefinitions.PlaybackSpeed != "undefined") {
                var speed = SpecialDefinitions.PlaybackSpeed / 100;
                player.defaultPlaybackRate(speed);
            }
            
            $(".video-js").css(
                "background-color",
                SpecialDefinitions.backgroundColor
            );
            player.src([
                {
                    src: hlsVideoURL,
                    type: "application/x-mpegURL",
                },
                {
                    src: mp4VideoURL,
                    type: "video/mp4",
                },
            ]);
            if (captionsURL && captionsURL != "") {
                var tt = player.addRemoteTextTrack({
                    src: captionsURL,
                    kind: "captions",
                    srclang: "en",
                    label: "English",
                    default: isCaptionsOn,
                    fontPercent: 4,
                });
                if (
                    typeof SpecialDefinitions.ccPosition != "undefined" &&
                    SpecialDefinitions.ccPosition != "default"
                ) {
                    setInterval(function () {
                        var height = $("video").height();
                        var ccheight =
                            $(".vjs-text-track-display div div div").height() || 0;
                        var mul = SpecialDefinitions.ccPosition;
                        var top = (height - ccheight - 20) * mul;
                        $(".vjs-text-track-display div div").css("top", top + "px");
                        $(".vjs-text-track-display div div div").css("position", "unset");
                    }, 10);
                }
                if (
                    typeof SpecialDefinitions.ClosedCaptionSize != "undefined" &&
                    player.textTrackSettings
                ) {
                    var settings = player.textTrackSettings;
                    settings.setValues({
                        fontPercent: SpecialDefinitions.ClosedCaptionSize / 100,
                    });
                    settings.updateDisplay();
                }
            }
            
            player.poster(posterURL);
            $(video).show();
            player.on("wait", function () {
                isPlaying = false;
            });
            player.on("waiting", function () {
                $(".video-js").addClass("vjs-custom-waiting");
                isWaiting = true;
                timeWhenWait = player.currentTime();
                clearInterval(videoWaitCheckIntervalId);
                videoWaitCheckIntervalId = setInterval(
                    StarfallStreamVideoMain.videoWaitCheck,
                    100
                );
            });
            player.on("pause", function () {
                isPlaying = false;
                if (singAlongControls) {
                    $singAlongPauseBtn.hide();
                    $singAlongPlayBtn.show();
                }
            });
            player.on("playing", function () {
                isPlaying = true;
                togglePlayButton(false);
                if (singAlongControls) {
                    StarfallStreamVideoMain.showControls();
                    $singAlongPauseBtn.show();
                    $singAlongPlayBtn.hide();
                }
            });
            if (!isComputer) {
                player.on("fullscreenchange", function () {
                    if (player.isFullscreen()) {
                        player.exitFullscreen();
                    } else {
                        resizeHandler();
                    }
                });
            }


            if (!SpecialDefinitions.showProgressBar) {
                $(".vjs-default-skin.vjs-has-started").hide();
                $(".vjs-control-bar").hide();
            } else {
                //$(".vjs-big-play-button").attr("tabindex", "1");
                //disable accessibility for control bar
                //disableTabIndex(".vjs-control-bar");
                //when we press enter when the big play button, video-js is
                //automatically transferring the control to pause button in playbar.
                //The following code disables that.
                // $(".vjs-control-bar .vjs-play-control").on("focus", function () {
                //   $(".vjs-control-bar .vjs-play-control").blur();
                // });
            }
            // $(".vjs-big-play-button").css({
            //   border: "none",
            // });
            // Added on 20210315, to fix 2 errors "Broken ARIA menu" in Webaim's tool.
            // var menus = document.getElementsByClassName("vjs-menu-content");
            // var menu;
            // for (var i = 0; i < menus.length; i++) {
            //     menu = menus[i];
            //     if (menu.childElementCount <= 0) {
            //         var node = document.createElement("LI");
            //         var att = document.createAttribute("role");
            //         att.value = "menuitem";
            //         node.setAttributeNode(att);
            //         menu.appendChild(node);
            //     }
            // }
            // menus = document.getElementsByClassName("vjs-menu-title");
            // for (var i = 0; i < menus.length; i++) {
            //     menu = menus[i];
            //     var att = document.createAttribute("role");
            //     att.value = "menuitem";
            //     menu.setAttributeNode(att);
            // }
            // const menuButton = player.controlBar?.subsCapsButton;
            // document.addEventListener('keydown', function (event) {
            //     if (event.key === 'Escape') {
            //         menuButton.menu.focusedChild_ = -1;
            //         const openMenus = document.querySelectorAll('.vjs-hover');
            //         const activeButton = document.querySelector('[aria-expanded="true"]');
            //         openMenus.forEach(function (menu) {
            //             menu.blur();
            //             menu.classList.remove('vjs-hover');
            //         });
            //
            //         const openMenusLock = document.querySelectorAll('.vjs-lock-showing');
            //         openMenusLock.forEach(function (menu) {
            //             menu.classList.remove('vjs-lock-showing')
            //             menu.classList.add('vjs-hidden');
            //         });
            //
            //         if (activeButton) {
            //             activeButton.setAttribute('aria-expanded', 'false');
            //             activeButton.focus(); // Refocus the button
            //         }
            //     }
            //    
            // });
            

            document.addEventListener('keydown', function(e) {
                if (
                    (e.code === 'Space' || e.key === ' ') &&
                    document.activeElement &&
                    (
                        document.activeElement.type === 'checkbox' ||
                        document.activeElement.tagName === 'SELECT'
                    )
                ) {
                    e.stopPropagation(); // Prevents Video.js from seeing it
                }
            }, true);
            
            
        });
        if (typeof SpecialDefinitions.FocusColor == "undefined") {
            SpecialDefinitions.FocusColor = "white";
        }
        $videoEl.css("width", "100%");
        $videoEl.css("height", "100%");
        var userAgent = window.navigator.userAgent.toLowerCase();
        var iPad = /ipad/.test(userAgent);
        var iPhone = /iphone/.test(userAgent);
        var android = /android/.test(userAgent);
        isComputer = !iPad && !iPhone && !android;
        if (SpecialDefinitions.tabsURL) {
            this.createSingAlongControls();
        } else {
            resizeHandler();
        }
        window.addEventListener("resize", resizeHandler);
        window.addEventListener("orientationchange", resizeHandler);
        if (iPhone) {
            //prevent scrolling on iPhone
            document.ontouchend = function (e) {
                window.scrollTo(0, 0);
                //e.preventDefault();
            };
        }
        videoProgressIntervalId = setInterval(
            StarfallStreamVideoMain.videoProgressEvent,
            1000
        );
        StarfallStreamVideoMain.sendInsideFlash();
        if (typeof SpecialDefinitions.SpaceBarArrowControls == "undefined") {
            SpecialDefinitions.SpaceBarArrowControls = true;
        }
        //keyboard events
        document.addEventListener("keydown", onKeyDown);
        //parse vtt
        if (loadPagesFromVTT && captionsURL) {
            parseVTT(captionsURL);
        }
        document.addEventListener(
            "visibilitychange",
            function () {
                if (document.hidden == false) {
                    setTimeout(function () {
                        if (!isPlaying) {
                            togglePlayButton(true);
                        }
                    }, 500);
                }
            }.bind(this),
            false
        );
    };

    function togglePlayButton(show) {
        var playBtn = document.getElementsByClassName("vjs-big-play-button")[0];
        if (show) {
            playBtn.style.display = "block";
        } else {
            playBtn.style.display = "none";
        }
    }

    function getMarker(items) {
        var marker = null;
        $.each(items, function (index, value) {
            var item = items[index].split("\n");
            if (item instanceof Array && item.length >= 3) {
                var ind = item[2].indexOf("(ding)");
                if (ind > -1) {
                    marker = "(ding)";
                } else {
                    ind = item[2].indexOf("()");
                    if (ind > -1) {
                        marker = "()";
                    }
                }
            }
        });
        return marker;
    }

    function parseVTT(captionsURL) {
        $.get(captionsURL, function (data) {
            // Read all captions into an array
            var items = data.split("\n\n");
            var marker = getMarker(items);
            //Loop through all captions
            $.each(items, function (index, value) {
                var item = items[index].split("\n");
                if (item instanceof Array && item.length >= 3) {
                    var ind = item[2].indexOf(marker);
                    if (ind > -1) {
                        var page = {};
                        var time = item[1].split(" --> ");
                        page.startTime = StarfallStreamVideoMain.convertToSeconds(time[0]);
                        page.endTime = StarfallStreamVideoMain.convertToSeconds(time[1]);
                        pages.push(page);
                    }
                }
            });
            if (pages.length <= 0) {
                loadPagesFromVTT = false;
            }
        });
    }

    function onKeyDown(event) {
        switch (event.key) {
            case "Left": // IE/Edge specific value
            case "ArrowLeft":
                if (SpecialDefinitions.SpaceBarArrowControls && isPlaying) {
                    if (loadPagesFromVTT) {
                        gotoPrevPage();
                    } else {
                        player.currentTime(player.currentTime() - 10);
                    }
                }
                break;
            case "Right": // IE/Edge specific value
            case "ArrowRight":
                if (SpecialDefinitions.SpaceBarArrowControls && isPlaying) {
                    if (loadPagesFromVTT) {
                        gotoNextPage();
                    } else {
                        player.currentTime(player.currentTime() + 10);
                    }
                }
                break;
            case " ":
                if (SpecialDefinitions.SpaceBarArrowControls) {
                    if (!isPlaying) {
                        player.play();
                    } else {
                        player.pause();
                    }
                }
                break;
            case "m":
                if (SpecialDefinitions.AudioMuteViaKeyBoard) {
                    player.muted(!player.muted());
                }
                break;
            default:
        }
    }

    function getCurrentPage() {
        var time = player.currentTime();
        var ind = -1;
        for (var i = 0; i < pages.length; i++) {
            if (time >= parseFloat(pages[i].startTime)) {
                ind = i;
            }
        }
        return ind;
    }

    function gotoNextPage() {
        currentPage = getCurrentPage();
        currentPage++;
        if (currentPage >= pages.length) {
            return;
        }
        gotoPage();
    }

    function gotoPrevPage() {
        currentPage = getCurrentPage();
        currentPage--;
        if (currentPage < -1) {
            return;
        }
        gotoPage();
    }

    function gotoPage() {
        if (currentPage <= -1) {
            player.currentTime(0);
        } else {
            player.currentTime(pages[currentPage].startTime);
        }
        player.play();
        //StarfallStreamVideoMain.updateSingAlongControlButtons();
    }

    function disableTabIndex(el) {
        $(el).attr("tabindex", "-2");
        var children = $(el).children();
        if (children.length > -1) {
            children.each(function () {
                disableTabIndex(this);
            });
        }
    }

    function resizeHandler() {
        StarfallStreamVideoMain.resizeHandler();
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(StarfallStreamVideoMain.resizeHandler, 1000);
    }

    StarfallStreamVideoMain.createSingAlongControls = function () {
        var controls =
            '<div class="sing_along_controls"><div class="prev_btn"></div><div class="play_btn"></div><div class="pause_btn"></div><div class="next_btn"></div></div>';
        $containerEl.parent().append(controls);
        $("body").css({height: window.innerHeight + "px", overflow: "hidden"});
        requestAnimationFrame(StarfallStreamVideoMain.initSingAlongControls);
    };
    StarfallStreamVideoMain.initSingAlongControls = function () {
        singAlongControls = true;
        $singAlongControls = $(".sing_along_controls");
        $singAlongPlayBtn = $(".sing_along_controls .play_btn");
        $singAlongPauseBtn = $(".sing_along_controls .pause_btn");
        $singAlongPrevBtn = $(".sing_along_controls .prev_btn");
        $singAlongNextBtn = $(".sing_along_controls .next_btn");
        $singAlongPlayBtn.on("click", StarfallStreamVideoMain.toggleVideoPlay);
        $singAlongPauseBtn.on("click", StarfallStreamVideoMain.toggleVideoPlay);
        $singAlongNextBtn.on("click", StarfallStreamVideoMain.gotoNextTab);
        $singAlongPrevBtn.on("click", StarfallStreamVideoMain.gotoPrevTab);
        StarfallStreamVideoMain.disableButton($singAlongPrevBtn);
        $.getJSON(tabsURL, StarfallStreamVideoMain.tabsLoaded);
        resizeHandler();
        StarfallStreamVideoMain.hideControls();
    };
    StarfallStreamVideoMain.tabsLoaded = function (data) {
        for (var i = 0; i < data.tabs.length; i++) {
            tabs.push(StarfallStreamVideoMain.convertToSeconds(data.tabs[i]));
        }
    };
    StarfallStreamVideoMain.convertToSeconds = function (time) {
        var _t = time.split(":");
        var ret_seconds = 0;
        var hours = parseInt(_t[0]) * 60 * 60;
        var minutes = parseInt(_t[1]) * 60;
        var seconds = parseFloat(_t[2]);
        ret_seconds = hours + minutes + seconds;
        return ret_seconds;
    };
    StarfallStreamVideoMain.toggleVideoPlay = function () {
        if (!isPlaying) {
            player.play();
        } else {
            player.pause();
            $singAlongPauseBtn.hide();
            $singAlongPlayBtn.show();
        }
    };
    StarfallStreamVideoMain.gotoNextTab = function () {
        if (currentTab < tabs.length - 1) {
            currentTab++;
        } else {
            currentTab = 0;
        }
        StarfallStreamVideoMain.gotoTab();
    };
    StarfallStreamVideoMain.gotoPrevTab = function () {
        if (currentTab > 0) {
            currentTab--;
        } else {
            currentTab = tabs.length - 1;
        }
        StarfallStreamVideoMain.gotoTab();
    };
    StarfallStreamVideoMain.gotoTab = function () {
        player.currentTime(tabs[currentTab]);
        player.play();
        StarfallStreamVideoMain.updateSingAlongControlButtons();
    };
    StarfallStreamVideoMain.videoWaitCheck = function () {
        var currentTime = player.currentTime();
        if (isWaiting && currentTime - timeWhenWait != 0) {
            isWaiting = false;
            clearInterval(videoWaitCheckIntervalId);
            $(".video-js").removeClass("vjs-custom-waiting");
        }
    };
    StarfallStreamVideoMain.videoProgressEvent = function () {
        var duration = player.duration();
        var currentTime = player.currentTime();
        if (singAlongControls) {
            for (var i = tabs.length - 1; i >= 0; i--) {
                if (currentTime >= tabs[i]) {
                    currentTab = i;
                    StarfallStreamVideoMain.updateSingAlongControlButtons();
                    break;
                }
            }
        }
        var remainingTime = duration - currentTime;
        if (currentTime >= SpecialDefinitions.nRateInterval && !nRateSent) {
            StarfallStreamVideoMain.sendNRate();
        }
        if (remainingTime <= SpecialDefinitions.greenArrowInterval) {
            StarfallStreamVideoMain.showNextButton();
            clearInterval(videoProgressIntervalId);
        }
    };
    StarfallStreamVideoMain.updateSingAlongControlButtons = function () {
        if (currentTab == 0 && playingFirstTime) {
            StarfallStreamVideoMain.disableButton($singAlongPrevBtn);
            StarfallStreamVideoMain.enableButton($singAlongNextBtn);
        } else {
            playingFirstTime = false;
            StarfallStreamVideoMain.enableButton($singAlongNextBtn);
            StarfallStreamVideoMain.enableButton($singAlongPrevBtn);
        }
    };
    StarfallStreamVideoMain.hideControls = function () {
        $singAlongControls.hide();
    };
    StarfallStreamVideoMain.showControls = function () {
        $singAlongControls.show();
        StarfallStreamVideoMain.resizeControls();
    };
    StarfallStreamVideoMain.enableButton = function ($btn) {
        $btn.css("opacity", 1);
        $btn.css("pointer-events", "all");
        $btn.prop("disabled", false);
    };
    StarfallStreamVideoMain.disableButton = function ($btn) {
        $btn.css("opacity", 0);
        $btn.css("pointer-events", "none");
        $btn.prop("disabled", true);
    };
    StarfallStreamVideoMain.showNextButton = function () {
        $(".nextbtn-container").show();
        $(".next-btn").focus();
        //$(".next-btn").click(StarfallStreamVideoMain.navigateToIndex);
        StarfallStreamVideoMain.resizeNextButton();
    };
    StarfallStreamVideoMain.navigateToIndex = function (e) {
        if (e) {
            e.preventDefault();
        }
        window.location.href = SpecialDefinitions.exitURL;
    };
    StarfallStreamVideoMain.sendNRate = function () {
        if (!nRateSent) {
            Tracking.nRate(SpecialDefinitions.rateCode);
            nRateSent = true;
        }
    };
    StarfallStreamVideoMain.sendInsideFlash = function () {
        Tracking.insideFlash(SpecialDefinitions.rateCode);
    };
    StarfallStreamVideoMain.resizeHandler = function () {
        StarfallStreamVideoMain.resizeVideo();
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        scale = Math.min(1, windowWidth / 1280);
        $(".close-btn img").width(Math.max(67 * scale, 41.5));
        var offset =
            $containerEl.offset().left +
            $containerEl.width() -
            $(".close-btn img").width() -
            40 * scale;
        var top = $containerEl.offset().top + 25 * scale;
        $(".close-btn").css({left: offset + "px", top: top + "px"});
        $(".close-btn").show();
        StarfallStreamVideoMain.resizeNextButton();
        StarfallStreamVideoMain.resizeCCButton();
        if (singAlongControls) {
            StarfallStreamVideoMain.resizeControls();
        }
        window.scrollTo(0, 0);
    };
    StarfallStreamVideoMain.resizeControls = function () {
        var _scale = Math.min(1, $containerEl.height() / 720);
        var _w = Math.max(
            singAlongButtonMinWidth,
            Math.min(singAlongButtonMaxWidth, singAlongButtonOriginalWidth * _scale)
        );
        var _h = Math.max(
            singAlongButtonMinHeight,
            Math.min(singAlongButtonMaxHeight, singAlongButtonOriginalHeight * _scale)
        );
        $singAlongPrevBtn.css({width: _w + "px", height: _h + "px"});
        $singAlongPlayBtn.css({width: _w + "px", height: _h + "px"});
        $singAlongPauseBtn.css({width: _w + "px", height: _h + "px"});
        $singAlongNextBtn.css({width: _w + "px", height: _h + "px"});
        var videoHeight = $containerEl.offset().top + $containerEl.height();
        var gap = window.innerHeight - videoHeight;
        var offset = Math.min(8 * _scale, 5);
        $singAlongControls.css({
            top: videoHeight - $singAlongControls.height() + offset + "px",
            bottom: "auto",
        });
    };
    StarfallStreamVideoMain.resizeCCButton = function () {
        $(".cc-btn img").width(Math.max(65 * scale, 40));
        var offset =
            $containerEl.offset().left +
            $containerEl.width() -
            $(".cc-btn img").width() -
            30 * scale;
        var top =
            $containerEl.offset().top +
            $containerEl.height() -
            $(".cc-btn img").height() -
            10 * scale;
        $(".ccbtn-container").css({
            left: offset + "px",
            top: top + "px",
            bottom: "auto",
        });
    };
    StarfallStreamVideoMain.resizeNextButton = function () {
        $(".next-btn img").width(Math.max(168 * scale, 80));
        var offset =
            ($containerEl.offset().left +
            $containerEl.width() -
            $(".next-btn img").width() -
            30 * scale) - 12;
        var top =
            $containerEl.offset().top +
            $containerEl.height() -
            $(".next-btn img").height() -
            10 * scale;
        $(".nextbtn-container").css({
            right: "10px",
        });
    };
    StarfallStreamVideoMain.resizeVideo = function () {
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        // if(isComputer){
        //     windowHeight*=0.95;
        // }
        var aspectRatio = 0.5625;
        if (
            typeof SpecialDefinitions.videoWidth != "undefined" &&
            typeof SpecialDefinitions.videoHeight != "undefined"
        ) {
            aspectRatio =
                SpecialDefinitions.videoHeight / SpecialDefinitions.videoWidth;
        }
        var newWidth = windowWidth;
        var newHeight = windowWidth * aspectRatio;
        if (newHeight > windowHeight) {
            newHeight = windowHeight;
            newWidth = windowHeight * (1 / aspectRatio);
        }
        var xPos = (window.innerWidth - newWidth) * 0.5;
        var top = 0;
        if (windowWidth > windowHeight) {
            top = (window.innerHeight - newHeight) * 0.5;
        }
        $containerEl.css({
            width: newWidth,
            height: newHeight,
            left: xPos,
            top: top,
        });
        $(video).css({width: newWidth, height: newHeight});
        var remainingHeight = windowHeight - newHeight;
        if (!isComputer) {
            if (windowWidth < windowHeight) {
                $rotateIconContainer.show();
                $rotateIconContainer.width(windowWidth);
                $rotateIconContainer.height(remainingHeight);
                var left = (windowWidth - $rotateIcon.width()) * 0.5;
                var top = (remainingHeight - $rotateIcon.height()) * 0.5;
                $rotateIcon.css({left: left + "px", top: top + "px"});
            } else {
                $rotateIconContainer.hide();
            }
        } else {
            $rotateIconContainer.hide();
        }
    };
})((StarfallStreamVideoMain = StarfallStreamVideoMain || {}));
var StarfallStreamVideoMain;
