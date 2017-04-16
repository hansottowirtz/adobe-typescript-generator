/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class GalleryConstrainType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.GalleryConstrainType}
			 * @readonly
			 */
			public static readonly CONSTRAINBOTH: Adobe.Photoshop.GalleryConstrainType;
			/**
			 * @type {Adobe.Photoshop.GalleryConstrainType}
			 * @readonly
			 */
			public static readonly CONSTRAINHEIGHT: Adobe.Photoshop.GalleryConstrainType;
			/**
			 * @type {Adobe.Photoshop.GalleryConstrainType}
			 * @readonly
			 */
			public static readonly CONSTRAINWIDTH: Adobe.Photoshop.GalleryConstrainType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}