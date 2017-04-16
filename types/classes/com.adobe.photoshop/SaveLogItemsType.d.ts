/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SaveLogItemsType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.SaveLogItemsType}
			 * @readonly
			 */
			public static readonly LOGFILE: Adobe.Photoshop.SaveLogItemsType;
			/**
			 * @type {Adobe.Photoshop.SaveLogItemsType}
			 * @readonly
			 */
			public static readonly LOGFILEANDMETADATA: Adobe.Photoshop.SaveLogItemsType;
			/**
			 * @type {Adobe.Photoshop.SaveLogItemsType}
			 * @readonly
			 */
			public static readonly METADATA: Adobe.Photoshop.SaveLogItemsType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}