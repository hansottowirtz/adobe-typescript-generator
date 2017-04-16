/// <reference path="../../packages/com.adobe.csawlib.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace CsawlibPhotoshop {
		/**
		 * The class Photoshop provides access to the global class of 
		 * the package com.adobe.photoshop
		 */
		class Photoshop {
			/**
			 * @type {Adobe.Photoshop.Application}
			 * @readonly
			 */
			public static readonly app: Adobe.Photoshop.Application;
			/**
			 * @type {Adobe.Flex.HostObject}
			 * @readonly
			 */
			public static readonly rootHostObject: Adobe.Flex.HostObject;
		}
	}
}