/// <reference path="../../namespaces/com.adobe.csawlib.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace CsawlibPhotoshop {
		/**
		 *  The class Photoshop provides access to the global class of 
		 * the package com.adobe.photoshop 
		 */
		class Photoshop {
			public static readonly app: Adobe.Photoshop.Application;
			public static readonly rootHostObject: HostObject;
		}
	}
}