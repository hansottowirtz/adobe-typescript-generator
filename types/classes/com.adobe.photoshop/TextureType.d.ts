/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class TextureType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.TextureType}
			 * @readonly
			 */
			public static readonly BLOCKS: Adobe.Photoshop.TextureType;
			/**
			 * @type {Adobe.Photoshop.TextureType}
			 * @readonly
			 */
			public static readonly CANVAS: Adobe.Photoshop.TextureType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.TextureType}
			 * @readonly
			 */
			public static readonly FILE: Adobe.Photoshop.TextureType;
			/**
			 * @type {Adobe.Photoshop.TextureType}
			 * @readonly
			 */
			public static readonly FROSTED: Adobe.Photoshop.TextureType;
			/**
			 * @type {Adobe.Photoshop.TextureType}
			 * @readonly
			 */
			public static readonly TINYLENS: Adobe.Photoshop.TextureType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}