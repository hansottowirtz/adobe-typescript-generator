/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class EditLogItemsType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.EditLogItemsType}
			 * @readonly
			 */
			public static readonly CONCISE: Adobe.Photoshop.EditLogItemsType;
			/**
			 * @type {Adobe.Photoshop.EditLogItemsType}
			 * @readonly
			 */
			public static readonly DETAILED: Adobe.Photoshop.EditLogItemsType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.EditLogItemsType}
			 * @readonly
			 */
			public static readonly SESSIONONLY: Adobe.Photoshop.EditLogItemsType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}