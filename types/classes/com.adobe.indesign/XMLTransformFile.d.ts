/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLTransformFile extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Use stylesheet specified in XML
			 * @type {Adobe.Indesign.XMLTransformFile}
			 * @readonly
			 */
			public static readonly STYLESHEET_IN_XML: Adobe.Indesign.XMLTransformFile;
			/**
			 * Alias for STYLESHEET_IN_XML. Use stylesheet specified in XML
			 * @type {Adobe.Indesign.XMLTransformFile}
			 * @readonly
			 */
			public static readonly stylesheetInXml: Adobe.Indesign.XMLTransformFile;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}