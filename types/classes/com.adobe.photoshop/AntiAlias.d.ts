/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class AntiAlias extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.AntiAlias}
			 * @readonly
			 */
			public static readonly CRISP: Adobe.Photoshop.AntiAlias;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.AntiAlias}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Photoshop.AntiAlias;
			/**
			 * @type {Adobe.Photoshop.AntiAlias}
			 * @readonly
			 */
			public static readonly SHARP: Adobe.Photoshop.AntiAlias;
			/**
			 * @type {Adobe.Photoshop.AntiAlias}
			 * @readonly
			 */
			public static readonly SMOOTH: Adobe.Photoshop.AntiAlias;
			/**
			 * @type {Adobe.Photoshop.AntiAlias}
			 * @readonly
			 */
			public static readonly STRONG: Adobe.Photoshop.AntiAlias;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}