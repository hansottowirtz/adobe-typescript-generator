/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Direction extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.Direction}
			 * @readonly
			 */
			public static readonly HORIZONTAL: Adobe.Photoshop.Direction;
			/**
			 * @type {Adobe.Photoshop.Direction}
			 * @readonly
			 */
			public static readonly VERTICAL: Adobe.Photoshop.Direction;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}