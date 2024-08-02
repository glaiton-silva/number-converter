<?php

namespace App\Controllers;

use CodeIgniter\Controller;

class ConversionController extends Controller
{
    /**
     * Exibe a página inicial com a view de conversão.
     *
     * @return \CodeIgniter\HTTP\Response
     */
    public function index()
    {
        return view('conversion_view');
    }

    /**
     * Converte números romanos para arábicos.
     *
     * @return \CodeIgniter\HTTP\Response
     */
    public function convertToArabic()
    {
        $roman = strtoupper($this->request->getVar('roman'));
        if ($roman) {
            if (preg_match('/^[IVXLCDM]+$/', $roman)) {
                $result = $this->romanToArabic($roman);
                return $this->response->setJSON(['result' => $result]);
            } else {
                return $this->response->setJSON(['error' => 'Entrada inválida para número romano']);
            }
        }
        return $this->response->setJSON(['result' => '']);
    }

    /**
     * Converte números arábicos para romanos.
     *
     * @return \CodeIgniter\HTTP\Response
     */
    public function convertToRoman()
    {
        $arabic = $this->request->getVar('arabic');
        if ($arabic && is_numeric($arabic) && $arabic > 0) {
            $result = $this->arabicToRoman($arabic);
            return $this->response->setJSON(['result' => $result]);
        }
        return $this->response->setJSON(['error' => 'Entrada inválida para número arábico']);
    }

    /**
     * Converte um número romano para arábico.
     *
     * @param string $roman O número romano a ser convertido.
     * @return int O número arábico resultante.
     */
    private function romanToArabic($roman)
    {
        $map = $this->getRomanMap();
        $result = 0;
        
        while (strlen($roman) > 0) {
            $found = false;
            foreach ($map as $key => $value) {
                if (strpos($roman, $key) === 0) {
                    $result += $value;
                    $roman = substr($roman, strlen($key));
                    $found = true;
                    break;
                }
            }
            if (!$found) {
                return 'Invalid Roman numeral';
            }
        }

        return $result;
    }

    /**
     * Converte um número arábico para romano.
     *
     * @param int $arabic O número arábico a ser convertido.
     * @return string O número romano resultante.
     */
    private function arabicToRoman($arabic)
    {
        $map = $this->getRomanMap();
        $result = '';

        foreach ($map as $key => $value) {
            while ($arabic >= $value) {
                $result .= $key;
                $arabic -= $value;
            }
        }

        return $result;
    }

    /**
     * Retorna o mapa de conversão de números romanos para arábicos.
     *
     * @return array O mapa de conversão.
     */
    private function getRomanMap()
    {
        return [
            'M' => 1000, 'CM' => 900, 'D' => 500, 'CD' => 400, 
            'C' => 100, 'XC' => 90, 'L' => 50, 'XL' => 40, 
            'X' => 10, 'IX' => 9, 'V' => 5, 'IV' => 4, 'I' => 1
        ];
    }
}
