/// <reference path="../../packages/com.adobe.csawlib.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace CsawlibIllustrator {
		/**
		 * The class Illustrator provides access to the global class of 
		 * the package com.adobe.illustrator
		 */
		class Illustrator {
			/**
			 * @type {Adobe.Illustrator.Application}
			 * @readonly
			 */
			public static readonly app: Adobe.Illustrator.Application;
			/**
			 * @type {Adobe.Flex.HostObject}
			 * @readonly
			 */
			public static readonly rootHostObject: Adobe.Flex.HostObject;
		}
	}
}