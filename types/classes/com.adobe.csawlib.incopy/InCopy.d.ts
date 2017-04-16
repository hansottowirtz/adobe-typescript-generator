/// <reference path="../../packages/com.adobe.csawlib.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace CsawlibIncopy {
		/**
		 * The class InCopy provides access to the global class of the 
		 * package com.adobe.incopy
		 */
		class InCopy {
			/**
			 * @type {Adobe.Incopy.Application}
			 * @readonly
			 */
			public static readonly app: Adobe.Incopy.Application;
			/**
			 * @type {Adobe.Flex.HostObject}
			 * @readonly
			 */
			public static readonly rootHostObject: Adobe.Flex.HostObject;
		}
	}
}