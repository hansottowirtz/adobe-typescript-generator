/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLElementPosition extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Specifies the position after the XML element.
			 * @type {Adobe.Indesign.XMLElementPosition}
			 * @readonly
			 */
			public static readonly AFTER_ELEMENT: Adobe.Indesign.XMLElementPosition;
			/**
			 * Alias for AFTER_ELEMENT. Specifies the position after the 
			 * XML element.
			 * @type {Adobe.Indesign.XMLElementPosition}
			 * @readonly
			 */
			public static readonly afterElement: Adobe.Indesign.XMLElementPosition;
			/**
			 * Specifies the position before the XML element.
			 * @type {Adobe.Indesign.XMLElementPosition}
			 * @readonly
			 */
			public static readonly BEFORE_ELEMENT: Adobe.Indesign.XMLElementPosition;
			/**
			 * Alias for BEFORE_ELEMENT. Specifies the position before the 
			 * XML element.
			 * @type {Adobe.Indesign.XMLElementPosition}
			 * @readonly
			 */
			public static readonly beforeElement: Adobe.Indesign.XMLElementPosition;
			/**
			 * Specifies the position at the end of the XML element.
			 * @type {Adobe.Indesign.XMLElementPosition}
			 * @readonly
			 */
			public static readonly ELEMENT_END: Adobe.Indesign.XMLElementPosition;
			/**
			 * Specifies the position at the beginning of the XML element.
			 * @type {Adobe.Indesign.XMLElementPosition}
			 * @readonly
			 */
			public static readonly ELEMENT_START: Adobe.Indesign.XMLElementPosition;
			/**
			 * Alias for ELEMENT_END. Specifies the position at the end of 
			 * the XML element.
			 * @type {Adobe.Indesign.XMLElementPosition}
			 * @readonly
			 */
			public static readonly elementEnd: Adobe.Indesign.XMLElementPosition;
			/**
			 * Alias for ELEMENT_START. Specifies the position at the 
			 * beginning of the XML element.
			 * @type {Adobe.Indesign.XMLElementPosition}
			 * @readonly
			 */
			public static readonly elementStart: Adobe.Indesign.XMLElementPosition;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}