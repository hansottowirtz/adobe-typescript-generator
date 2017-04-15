/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class IllustratorPathType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Exports all paths. */
			public static readonly ALLPATHS: Adobe.Photoshop.IllustratorPathType;
			/** Exports the document bounds. */
			public static readonly DOCUMENTBOUNDS: Adobe.Photoshop.IllustratorPathType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Exports the specified path. To specify the path, see the 
			 * path name property of the illustrator export options object.
			 */
			public static readonly NAMEDPATH: Adobe.Photoshop.IllustratorPathType;
			/** Constructor */
			public constructor();
		}
	}
}