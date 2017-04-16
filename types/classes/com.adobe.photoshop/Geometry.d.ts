/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Geometry extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.Geometry}
			 * @readonly
			 */
			public static readonly HEPTAGON: Adobe.Photoshop.Geometry;
			/**
			 * @type {Adobe.Photoshop.Geometry}
			 * @readonly
			 */
			public static readonly HEXAGON: Adobe.Photoshop.Geometry;
			/**
			 * @type {Adobe.Photoshop.Geometry}
			 * @readonly
			 */
			public static readonly OCTAGON: Adobe.Photoshop.Geometry;
			/**
			 * @type {Adobe.Photoshop.Geometry}
			 * @readonly
			 */
			public static readonly PENTAGON: Adobe.Photoshop.Geometry;
			/**
			 * @type {Adobe.Photoshop.Geometry}
			 * @readonly
			 */
			public static readonly SQUARE: Adobe.Photoshop.Geometry;
			/**
			 * @type {Adobe.Photoshop.Geometry}
			 * @readonly
			 */
			public static readonly TRIANGLE: Adobe.Photoshop.Geometry;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}