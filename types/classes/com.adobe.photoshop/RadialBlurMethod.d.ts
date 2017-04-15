/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The blur method to use. */
		class RadialBlurMethod extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Blurs along concentric circular lines at the specified 
			 * degree of rotation.
			 */
			public static readonly SPIN: Adobe.Photoshop.RadialBlurMethod;
			/**
			 * Blurs along radial lines, as if zooming into or out of the 
			 * image.
			 */
			public static readonly ZOOM: Adobe.Photoshop.RadialBlurMethod;
			/** Constructor */
			public constructor();
		}
	}
}