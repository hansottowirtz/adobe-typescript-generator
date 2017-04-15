/// <reference path="../../namespaces/com.adobe.csawlib.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace CsawlibIllustrator {
		/**
		 *  The class Illustrator provides access to the global class 
		 * of the package com.adobe.illustrator 
		 */
		class Illustrator {
			public static readonly app: Adobe.Illustrator.Application;
			public static readonly rootHostObject: HostObject;
		}
	}
}