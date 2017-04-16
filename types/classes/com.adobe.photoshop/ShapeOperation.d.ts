/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ShapeOperation extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.ShapeOperation}
			 * @readonly
			 */
			public static readonly SHAPEADD: Adobe.Photoshop.ShapeOperation;
			/**
			 * @type {Adobe.Photoshop.ShapeOperation}
			 * @readonly
			 */
			public static readonly SHAPEINTERSECT: Adobe.Photoshop.ShapeOperation;
			/**
			 * @type {Adobe.Photoshop.ShapeOperation}
			 * @readonly
			 */
			public static readonly SHAPESUBTRACT: Adobe.Photoshop.ShapeOperation;
			/**
			 * @type {Adobe.Photoshop.ShapeOperation}
			 * @readonly
			 */
			public static readonly SHAPEXOR: Adobe.Photoshop.ShapeOperation;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}