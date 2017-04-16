/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class WaveType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.WaveType}
			 * @readonly
			 */
			public static readonly SINE: Adobe.Photoshop.WaveType;
			/**
			 * @type {Adobe.Photoshop.WaveType}
			 * @readonly
			 */
			public static readonly SQUARE: Adobe.Photoshop.WaveType;
			/**
			 * @type {Adobe.Photoshop.WaveType}
			 * @readonly
			 */
			public static readonly TRIANGULAR: Adobe.Photoshop.WaveType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}