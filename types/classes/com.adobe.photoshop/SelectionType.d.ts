/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SelectionType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Remove the selection from the already selected area. */
			public static readonly DIMINISH: Adobe.Photoshop.SelectionType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Add the selection to an already selected area. */
			public static readonly EXTEND: Adobe.Photoshop.SelectionType;
			/**
			 * Make the selection only the area where the new selection 
			 * intersects the already selected area.
			 */
			public static readonly INTERSECT: Adobe.Photoshop.SelectionType;
			/** Replace the selected area. */
			public static readonly REPLACE: Adobe.Photoshop.SelectionType;
			/** Constructor */
			public constructor();
		}
	}
}