/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ExportType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.ExportType}
			 * @readonly
			 */
			public static readonly ILLUSTRATORPATHS: Adobe.Photoshop.ExportType;
			/**
			 * @type {Adobe.Photoshop.ExportType}
			 * @readonly
			 */
			public static readonly SAVEFORWEB: Adobe.Photoshop.ExportType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}