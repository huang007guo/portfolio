# -*- coding: utf-8 -*-
"""
提取PDF文件内容
"""
import pdfplumber
import sys

def extract_pdf_content(pdf_path):
    """提取PDF文件的文本内容"""
    try:
        with pdfplumber.open(pdf_path) as pdf:
            print(f"PDF总页数: {len(pdf.pages)}")
            print("=" * 50)
            
            full_text = ""
            for i, page in enumerate(pdf.pages):
                print(f"\n第 {i+1} 页:")
                print("-" * 50)
                text = page.extract_text()
                if text:
                    print(text)
                    full_text += text + "\n"
                else:
                    print("(无文本内容)")
            
            # 保存到文件
            output_file = pdf_path.replace('.pdf', '_extracted.txt')
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(full_text)
            print(f"\n内容已保存到: {output_file}")
            
            return full_text
            
    except Exception as e:
        print(f"错误: {e}")
        return None

if __name__ == "__main__":
    pdf_path = r"g:\ai\my\ai_hope\portfolio\黄国梁-架构师 (1).pdf"
    extract_pdf_content(pdf_path)
