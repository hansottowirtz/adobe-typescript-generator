/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TransformationMatrices extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Create a new TransformationMatrix.
			 * @param {number} horizontalScaleFactorParam The horizontal 
			 * scale factor of the transformation matrix (Optional)
			 * @param {number} verticalScaleFactorParam The vertical scale 
			 * factor of the transformation matrix (Optional)
			 * @param {number} clockwiseShearAngleParam The shear angle of 
			 * the transformation matrix (Optional)
			 * @param {number} counterclockwiseRotationAngleParam The 
			 * rotation angle of the transformation matrix (Optional)
			 * @param {number} horizontalTranslationParam The horizontal 
			 * translation of the transformation matrix (Optional)
			 * @param {number} verticalTranslationParam The vertical 
			 * translation of the transformation matrix (Optional)
			 * @param {any[]} matrixValuesParam The values of the 
			 * transformation matrix (Optional)
			 * @param {any[]} matrixMappingParam The mapping the 
			 * transformation matrix performs on the unit triangle. Can 
			 * accept: Array of Array of 2 Arrays of 2 Reals. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TransformationMatrix (Optional)
			 * @returns {Adobe.Indesign.TransformationMatrix}
			 */
			public add(horizontalScaleFactorParam: number, verticalScaleFactorParam: number, clockwiseShearAngleParam: number, counterclockwiseRotationAngleParam: number, horizontalTranslationParam: number, verticalTranslationParam: number, matrixValuesParam: any[], matrixMappingParam: any[], withPropertiesParam: any): Adobe.Indesign.TransformationMatrix;
			/**
			 * Returns any TransformationMatrix in the collection.
			 * @returns {Adobe.Indesign.TransformationMatrix}
			 */
			public anyItem(): Adobe.Indesign.TransformationMatrix;
			/**
			 * Displays the number of elements in the TransformationMatrix.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every TransformationMatrix in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first TransformationMatrix in the collection.
			 * @returns {Adobe.Indesign.TransformationMatrix}
			 */
			public firstItem(): Adobe.Indesign.TransformationMatrix;
			/**
			 * Returns the TransformationMatrix with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.TransformationMatrix}
			 */
			public item(indexParam: any): Adobe.Indesign.TransformationMatrix;
			/**
			 * Returns the TransformationMatrix with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.TransformationMatrix}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.TransformationMatrix;
			/**
			 * Returns the TransformationMatrices within the specified 
			 * range.
			 * @param {any} fromParam The TransformationMatrix, index, or 
			 * name at the beginning of the range. Can accept: 
			 * TransformationMatrix, Long Integer or String.
			 * @param {any} toParam The TransformationMatrix, index, or 
			 * name at the end of the range. Can accept: 
			 * TransformationMatrix, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last TransformationMatrix in the collection.
			 * @returns {Adobe.Indesign.TransformationMatrix}
			 */
			public lastItem(): Adobe.Indesign.TransformationMatrix;
			/**
			 * Returns the middle TransformationMatrix in the collection.
			 * @returns {Adobe.Indesign.TransformationMatrix}
			 */
			public middleItem(): Adobe.Indesign.TransformationMatrix;
			/**
			 * Returns the TransformationMatrix whose index follows the 
			 * specified TransformationMatrix in the collection.
			 * @param {TransformationMatrix} objParam The 
			 * TransformationMatrix whose index comes before the desired 
			 * TransformationMatrix. 
			 * @returns {Adobe.Indesign.TransformationMatrix}
			 */
			public nextItem(objParam: TransformationMatrix): Adobe.Indesign.TransformationMatrix;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 * @returns {number}
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 * @returns {any}
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the TransformationMatrix with the index previous to 
			 * the specified index.
			 * @param {TransformationMatrix} objParam The index of the 
			 * TransformationMatrix that follows the desired 
			 * TransformationMatrix.
			 * @returns {Adobe.Indesign.TransformationMatrix}
			 */
			public previousItem(objParam: TransformationMatrix): Adobe.Indesign.TransformationMatrix;
		}
	}
}