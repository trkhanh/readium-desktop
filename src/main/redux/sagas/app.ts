// ==LICENSE-BEGIN==
// Copyright 2017 European Digital Reading Lab. All rights reserved.
// Licensed to the Readium Foundation under one or more contributor license agreements.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file exposed on Github (readium) in the project repository.
// ==LICENSE-END==

import { SagaIterator } from "redux-saga";
import { put, take } from "redux-saga/effects";

import { appActions } from "readium-desktop/main/redux/actions";

export function* appInitWatcher(): SagaIterator {
    while (true) {
        yield take(appActions.initRequest.ID);
        yield put(appActions.initSuccess.build());
    }
}
