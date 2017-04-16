/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A collection of documents */
		class Documents extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * a document
			 * @param {any} width width of the document (unit value)
			 * @param {any} height height of the document (unit value)
			 * @param {number} resolution Resolution of the document (in 
			 * pixels per inch) ( default: 72.0 )
			 * @param {string} name name of document
			 * @param {Adobe.Photoshop.NewDocumentMode} mode document mode 
			 * (Bitmap, Grayscale, RGB, CMYK or Lab) ( default: 
			 * NewDocumentMode.RGB )
			 * @param {Adobe.Photoshop.DocumentFill} initialFill Initial 
			 * fill of the document ( default: DocumentFill.WHITE )
			 * @param {number} pixelAspectRatio Initial pixel aspect ratio 
			 * of the document ( default: 1.0 )
			 * @param {Adobe.Photoshop.BitsPerChannelType} bitsPerChannel 
			 * number of bits per channel ( default: 
			 * BitsPerChannelType.EIGHT )
			 * @param {string} colorProfileName name of color profile for 
			 * document
			 * @returns {Adobe.Photoshop.Document}
			 */
			public add(width: any, height: any, resolution: number, name: string, mode: Adobe.Photoshop.NewDocumentMode, initialFill: Adobe.Photoshop.DocumentFill, pixelAspectRatio: number, bitsPerChannel: Adobe.Photoshop.BitsPerChannelType, colorProfileName: string): Adobe.Photoshop.Document;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam
			 * @returns {Adobe.Photoshop.Document}
			 */
			public getByName(nameParam: string): Adobe.Photoshop.Document;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Photoshop.Document}
			 */
			[idx: number]: Adobe.Photoshop.Document;
		}
	}
}