/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLElementLocation extends Adobe.Csawlib.CSEnumBase {
			/** Locates the element at the end of the containing object. */
			public static readonly ELEMENT_END: Adobe.Incopy.XMLElementLocation;
			/**
			 * Locates the element at the beginning of the containing 
			 * object.
			 */
			public static readonly ELEMENT_START: Adobe.Incopy.XMLElementLocation;
			/**
			 * Alias for ELEMENT_END. Locates the element at the end of the 
			 * containing object.
			 */
			public static readonly elementEnd: Adobe.Incopy.XMLElementLocation;
			/**
			 * Alias for ELEMENT_START. Locates the element at the 
			 * beginning of the containing object.
			 */
			public static readonly elementStart: Adobe.Incopy.XMLElementLocation;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}