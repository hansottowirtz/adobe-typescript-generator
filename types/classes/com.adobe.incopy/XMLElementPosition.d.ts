/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLElementPosition extends Adobe.Csawlib.CSEnumBase {
			/** Specifies the position after the XML element. */
			public static readonly AFTER_ELEMENT: Adobe.Incopy.XMLElementPosition;
			/**
			 * Alias for AFTER_ELEMENT. Specifies the position after the 
			 * XML element.
			 */
			public static readonly afterElement: Adobe.Incopy.XMLElementPosition;
			/** Specifies the position before the XML element. */
			public static readonly BEFORE_ELEMENT: Adobe.Incopy.XMLElementPosition;
			/**
			 * Alias for BEFORE_ELEMENT. Specifies the position before the 
			 * XML element.
			 */
			public static readonly beforeElement: Adobe.Incopy.XMLElementPosition;
			/** Specifies the position at the end of the XML element. */
			public static readonly ELEMENT_END: Adobe.Incopy.XMLElementPosition;
			/** Specifies the position at the beginning of the XML element. */
			public static readonly ELEMENT_START: Adobe.Incopy.XMLElementPosition;
			/**
			 * Alias for ELEMENT_END. Specifies the position at the end of 
			 * the XML element.
			 */
			public static readonly elementEnd: Adobe.Incopy.XMLElementPosition;
			/**
			 * Alias for ELEMENT_START. Specifies the position at the 
			 * beginning of the XML element.
			 */
			public static readonly elementStart: Adobe.Incopy.XMLElementPosition;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}