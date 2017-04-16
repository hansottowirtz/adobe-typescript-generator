/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Justification extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.Justification}
			 * @readonly
			 */
			public static readonly CENTER: Adobe.Photoshop.Justification;
			/**
			 * @type {Adobe.Photoshop.Justification}
			 * @readonly
			 */
			public static readonly CENTERJUSTIFIED: Adobe.Photoshop.Justification;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.Justification}
			 * @readonly
			 */
			public static readonly FULLYJUSTIFIED: Adobe.Photoshop.Justification;
			/**
			 * @type {Adobe.Photoshop.Justification}
			 * @readonly
			 */
			public static readonly LEFT: Adobe.Photoshop.Justification;
			/**
			 * @type {Adobe.Photoshop.Justification}
			 * @readonly
			 */
			public static readonly LEFTJUSTIFIED: Adobe.Photoshop.Justification;
			/**
			 * @type {Adobe.Photoshop.Justification}
			 * @readonly
			 */
			public static readonly RIGHT: Adobe.Photoshop.Justification;
			/**
			 * @type {Adobe.Photoshop.Justification}
			 * @readonly
			 */
			public static readonly RIGHTJUSTIFIED: Adobe.Photoshop.Justification;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}