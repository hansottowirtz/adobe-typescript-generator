/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PaintingCursors extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.PaintingCursors}
			 * @readonly
			 */
			public static readonly BRUSHSIZE: Adobe.Photoshop.PaintingCursors;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.PaintingCursors}
			 * @readonly
			 */
			public static readonly PRECISE: Adobe.Photoshop.PaintingCursors;
			/**
			 * @type {Adobe.Photoshop.PaintingCursors}
			 * @readonly
			 */
			public static readonly STANDARD: Adobe.Photoshop.PaintingCursors;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}