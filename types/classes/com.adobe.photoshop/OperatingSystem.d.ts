/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class OperatingSystem extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.OperatingSystem}
			 * @readonly
			 */
			public static readonly OS2: Adobe.Photoshop.OperatingSystem;
			/**
			 * @type {Adobe.Photoshop.OperatingSystem}
			 * @readonly
			 */
			public static readonly WINDOWS: Adobe.Photoshop.OperatingSystem;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}