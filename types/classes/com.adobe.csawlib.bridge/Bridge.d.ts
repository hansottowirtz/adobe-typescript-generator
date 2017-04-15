/// <reference path="../../namespaces/com.adobe.csawlib.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace CsawlibBridge {
		/**
		 *  The class Bridge provides access to the global class of the 
		 * package com.adobe.bridge 
		 */
		class Bridge {
			public static readonly app: Adobe.Bridge.App;
			public static readonly rootHostObject: HostObject;
		}
	}
}