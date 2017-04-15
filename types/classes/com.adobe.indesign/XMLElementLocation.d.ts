/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLElementLocation extends Adobe.Csawlib.CSEnumBase {
			/** Locates the element at the end of the containing object. */
			public static readonly ELEMENT_END: Adobe.Indesign.XMLElementLocation;
			/**
			 * Locates the element at the beginning of the containing 
			 * object.
			 */
			public static readonly ELEMENT_START: Adobe.Indesign.XMLElementLocation;
			/**
			 * Alias for ELEMENT_END. Locates the element at the end of the 
			 * containing object.
			 */
			public static readonly elementEnd: Adobe.Indesign.XMLElementLocation;
			/**
			 * Alias for ELEMENT_START. Locates the element at the 
			 * beginning of the containing object.
			 */
			public static readonly elementStart: Adobe.Indesign.XMLElementLocation;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}