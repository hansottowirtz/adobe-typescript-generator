/// <reference path="../../packages/com.adobe.csawlib.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace CsawlibPhotoshop {
		/**
		 * The class Photoshop provides access to the global class of 
		 * the package com.adobe.photoshop
		 */
		namespace Photoshop {
			const app: Adobe.Photoshop.Application;
			const rootHostObject: HostObject;
		}
	}
}