/// <reference path="../../packages/com.adobe.csawlib.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace CsawlibBridge {
		/**
		 * The class Bridge provides access to the global class of the 
		 * package com.adobe.bridge
		 */
		class Bridge {
			/**
			 * @type {Adobe.Bridge.App}
			 * @readonly
			 */
			public static readonly app: Adobe.Bridge.App;
			/**
			 * @type {Adobe.Flex.HostObject}
			 * @readonly
			 */
			public static readonly rootHostObject: Adobe.Flex.HostObject;
		}
	}
}