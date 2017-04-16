/// <reference path="../../packages/com.adobe.csawlib.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace CsawlibIndesign {
		/**
		 * The class InDesign provides access to the global class of 
		 * the package com.adobe.indesign
		 */
		class InDesign {
			/**
			 * @type {Adobe.Indesign.Application}
			 * @readonly
			 */
			public static readonly app: Adobe.Indesign.Application;
			/**
			 * @type {Adobe.Flex.HostObject}
			 * @readonly
			 */
			public static readonly rootHostObject: Adobe.Flex.HostObject;
		}
	}
}