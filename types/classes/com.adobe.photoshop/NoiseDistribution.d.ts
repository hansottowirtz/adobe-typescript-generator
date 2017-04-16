/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class NoiseDistribution extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.NoiseDistribution}
			 * @readonly
			 */
			public static readonly GAUSSIAN: Adobe.Photoshop.NoiseDistribution;
			/**
			 * @type {Adobe.Photoshop.NoiseDistribution}
			 * @readonly
			 */
			public static readonly UNIFORM: Adobe.Photoshop.NoiseDistribution;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}