/**
 Copyright 2022 Rob Royce

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
export interface BrowserViewHeaderConfig {
    showOpenButton?: boolean;
    canClose?: boolean,
    canCopy?: boolean,
    canGoBack?: boolean,
    canGoForward?: boolean,
    canRefresh?: boolean,
    canSave?: boolean,
    displayText?: string,
    displayTextReadOnly?: boolean,
    customClass?: string | string[],
    backgroundColor?: string,
    showSaveButton?: boolean,
    showNavButtons?: boolean,
    showActionButtons?: boolean,
    showDisplayText?: boolean,
    showCloseButton?: boolean
}

export interface BrowserViewHeaderEvent {
    backClicked?: boolean,
    forwardClicked?: boolean,
    refreshClicked?: boolean,
    closeClicked?: boolean,
    copyClicked?: boolean,
    saveClicked?: boolean,
    openClicked?: boolean
}

export interface FileViewConfig {
    filePath: string,
    isDialog?: true
}

export interface FileViewClickEvent extends BrowserViewHeaderEvent {
}

export interface BrowserViewConfig {
    url: URL,
    isDialog?: true,
    canSave?: true
}

export interface BrowserViewNavEvent {
    urlChanged?: true,
    url?: URL
}

export interface BrowserViewClickEvent extends BrowserViewHeaderEvent {
}
