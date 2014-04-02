/**
 * Copyright 2013 Mozilla Foundation
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations undxr the License.
 */
// Class: ScriptTimeoutError
module Shumway.AVM2.AS.flash.errors {
  import notImplemented = Shumway.Debug.notImplemented;
  export class ScriptTimeoutError extends ASError {
    static initializer: any = null;
    constructor (message: string = "", id: number /*int*/ = 0) {
      message = "" + message; id = id | 0;
      false && super(undefined, undefined);
      notImplemented("Dummy Constructor: public flash.errors.ScriptTimeoutError");
    }
    // Static   JS -> AS Bindings
    // Static   AS -> JS Bindings
    // Instance JS -> AS Bindings
    // Instance AS -> JS Bindings
  }
}