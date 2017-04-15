/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SpherizeMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Distorts the image as if it is wrapped around a horizontal 
			 * cylinder.
			 */
			public static readonly HORIZONTAL: Adobe.Photoshop.SpherizeMode;
			/** Distorts the image as if it is wrapped around a sphere. */
			public static readonly NORMAL: Adobe.Photoshop.SpherizeMode;
			/**
			 * Distorts the image as if it is wrapped around a vertical 
			 * cylinder.
			 */
			public static readonly VERTICAL: Adobe.Photoshop.SpherizeMode;
			/** Constructor */
			public constructor();
		}
	}
}