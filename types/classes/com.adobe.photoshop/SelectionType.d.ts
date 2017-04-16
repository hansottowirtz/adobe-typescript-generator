/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SelectionType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.SelectionType}
			 * @readonly
			 */
			public static readonly DIMINISH: Adobe.Photoshop.SelectionType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.SelectionType}
			 * @readonly
			 */
			public static readonly EXTEND: Adobe.Photoshop.SelectionType;
			/**
			 * @type {Adobe.Photoshop.SelectionType}
			 * @readonly
			 */
			public static readonly INTERSECT: Adobe.Photoshop.SelectionType;
			/**
			 * @type {Adobe.Photoshop.SelectionType}
			 * @readonly
			 */
			public static readonly REPLACE: Adobe.Photoshop.SelectionType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}