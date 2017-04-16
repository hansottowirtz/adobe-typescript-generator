/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Preview extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.Preview}
			 * @readonly
			 */
			public static readonly EIGHTBITTIFF: Adobe.Photoshop.Preview;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.Preview}
			 * @readonly
			 */
			public static readonly MACOSEIGHTBIT: Adobe.Photoshop.Preview;
			/**
			 * @type {Adobe.Photoshop.Preview}
			 * @readonly
			 */
			public static readonly MACOSJPEG: Adobe.Photoshop.Preview;
			/**
			 * @type {Adobe.Photoshop.Preview}
			 * @readonly
			 */
			public static readonly MACOSMONOCHROME: Adobe.Photoshop.Preview;
			/**
			 * @type {Adobe.Photoshop.Preview}
			 * @readonly
			 */
			public static readonly MONOCHROMETIFF: Adobe.Photoshop.Preview;
			/**
			 * @type {Adobe.Photoshop.Preview}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Photoshop.Preview;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}