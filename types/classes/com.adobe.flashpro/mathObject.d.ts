/// <reference path="../../packages/com.adobe.flashpro/index.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * available as a read-only property of the fl object. Math 
		 * object has common methods to do common mathematical 
		 * operations.
		 */
		class mathObject extends Adobe.Csawlib.CSHostObject {
			/**
			 * Performs a matrix concatenation and returns the result.
			 * @param {any} mat1 the first matrix in the product.  Must be 
			 * an object with fields a, b, c, d, tx, ty.
			 * @param {any} mat2 the second matrix on the product.  Must be 
			 * an object with fields a, b, c, d, tx, ty.
			 */
			public concatMatrix(mat1: any, mat2: any): any;
			/**
			 * Returns the inverse of the matrix given as an argument.
			 * @param {any} mat the matrix object.  must have the following 
			 * fields:  a, b, c, d, tx, ty;
			 */
			public invertMatrix(mat: any): any;
			/**
			 * Computes the distance between the 2 points.
			 * @param {any} pt1 the first point.  Must have fields x and y.
			 * @param {any} pt2 second point in the distance calculation.  
			 * Must have fields x and y.
			 */
			public pointDistance(pt1: any, pt2: any): number;
			/** Matrix transform point */
			public transformPoint(): any;
		}
	}
}