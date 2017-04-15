/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The method for replacing eliminated fields. */
		class CreateFields extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Duplicates existing pixels. */
			public static readonly DUPLICATION: Adobe.Photoshop.CreateFields;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Assigns color values to any new pixels that Photoshop 
			 * creates based on the color values of existing pixels in the 
			 * image.
			 */
			public static readonly INTERPOLATION: Adobe.Photoshop.CreateFields;
			/** Constructor */
			public constructor();
		}
	}
}