/// <reference path="../../packages/com.adobe.csawlib.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace CsawlibBridge {
		/**
		 * The class Bridge provides access to the global class of the 
		 * package com.adobe.bridge
		 */
		namespace Bridge {
			const app: Adobe.Bridge.App;
			const rootHostObject: HostObject;
		}
	}
}