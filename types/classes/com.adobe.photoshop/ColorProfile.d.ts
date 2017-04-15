/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * The type of color model that defines the document's working 
		 * space.
		 */
		class ColorProfile extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Color manages this document using a custom color profile. */
			public static readonly CUSTOM: Adobe.Photoshop.ColorProfile;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The document is not color managed. */
			public static readonly NONE: Adobe.Photoshop.ColorProfile;
			/**
			 * Color manages this document using the working color profile.
			 */
			public static readonly WORKING: Adobe.Photoshop.ColorProfile;
			/** Constructor */
			public constructor();
		}
	}
}