/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLTransformFile extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Use stylesheet specified in XML
			 * @type {Adobe.Incopy.XMLTransformFile}
			 * @readonly
			 */
			public static readonly STYLESHEET_IN_XML: Adobe.Incopy.XMLTransformFile;
			/**
			 * Alias for STYLESHEET_IN_XML. Use stylesheet specified in XML
			 * @type {Adobe.Incopy.XMLTransformFile}
			 * @readonly
			 */
			public static readonly stylesheetInXml: Adobe.Incopy.XMLTransformFile;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}