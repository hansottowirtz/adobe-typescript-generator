/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class QueryStateType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.QueryStateType}
			 * @readonly
			 */
			public static readonly ALWAYS: Adobe.Photoshop.QueryStateType;
			/**
			 * @type {Adobe.Photoshop.QueryStateType}
			 * @readonly
			 */
			public static readonly ASK: Adobe.Photoshop.QueryStateType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.QueryStateType}
			 * @readonly
			 */
			public static readonly NEVER: Adobe.Photoshop.QueryStateType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}