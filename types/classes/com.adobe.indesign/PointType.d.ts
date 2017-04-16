/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PointType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CORNER. The point is a corner point, it has either 
			 * one direction line, or two independent direction lines.
			 * @type {Adobe.Indesign.PointType}
			 * @readonly
			 */
			public static readonly corner: Adobe.Indesign.PointType;
			/**
			 * The point is a corner point, it has either one direction 
			 * line, or two independent direction lines.
			 * @type {Adobe.Indesign.PointType}
			 * @readonly
			 */
			public static readonly CORNER: Adobe.Indesign.PointType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for PLAIN. The point is a plain point, it has no 
			 * direction lines.
			 * @type {Adobe.Indesign.PointType}
			 * @readonly
			 */
			public static readonly plain: Adobe.Indesign.PointType;
			/**
			 * The point is a plain point, it has no direction lines.
			 * @type {Adobe.Indesign.PointType}
			 * @readonly
			 */
			public static readonly PLAIN: Adobe.Indesign.PointType;
			/**
			 * Alias for SMOOTH. The point is a smooth point, it has two 
			 * direction lines which are parallel.
			 * @type {Adobe.Indesign.PointType}
			 * @readonly
			 */
			public static readonly smooth: Adobe.Indesign.PointType;
			/**
			 * The point is a smooth point, it has two direction lines 
			 * which are parallel.
			 * @type {Adobe.Indesign.PointType}
			 * @readonly
			 */
			public static readonly SMOOTH: Adobe.Indesign.PointType;
			/**
			 * Alias for SYMMETRICAL. A special type of smooth point with 
			 * two direction lines of equal length.
			 * @type {Adobe.Indesign.PointType}
			 * @readonly
			 */
			public static readonly symmetrical: Adobe.Indesign.PointType;
			/**
			 * A special type of smooth point with two direction lines of 
			 * equal length.
			 * @type {Adobe.Indesign.PointType}
			 * @readonly
			 */
			public static readonly SYMMETRICAL: Adobe.Indesign.PointType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}