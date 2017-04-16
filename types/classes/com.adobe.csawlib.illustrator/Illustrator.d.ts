/// <reference path="../../packages/com.adobe.csawlib.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace CsawlibIllustrator {
		/**
		 * The class Illustrator provides access to the global class of 
		 * the package com.adobe.illustrator
		 */
		namespace Illustrator {
			const app: Adobe.Illustrator.Application;
			const rootHostObject: HostObject;
		}
	}
}