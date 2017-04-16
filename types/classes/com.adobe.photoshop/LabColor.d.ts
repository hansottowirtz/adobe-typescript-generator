/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** An Lab color specification */
		class LabColor extends Adobe.Photoshop.Color {
			/**
			 * the a-value (between -128.0 and 127.0)
			 * @type {number}
			 */
			public a: number;
			/**
			 * the b-value (between -128.0 and 127.0)
			 * @type {number}
			 */
			public b: number;
			/**
			 * the L-value (between 0.0 and 100.0)
			 * @type {number}
			 */
			public l: number;
		}
	}
}