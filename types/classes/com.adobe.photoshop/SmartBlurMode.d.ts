/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SmartBlurMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * Blur is applied only to edges of color transitions. Where 
			 * significant contrast occurs, applies black-and-white edges.
			 */
			public static readonly EDGEONLY: Adobe.Photoshop.SmartBlurMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Blur is applied to entire image. */
			public static readonly NORMAL: Adobe.Photoshop.SmartBlurMode;
			/**
			 * Blur is applied only to edges of color transitions. Where 
			 * significant contrast occurs, applies white edges.
			 */
			public static readonly OVERLAYEDGE: Adobe.Photoshop.SmartBlurMode;
			/** Constructor */
			public constructor();
		}
	}
}