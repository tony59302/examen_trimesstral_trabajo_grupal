CREATE TABLE IF NOT EXISTS materials (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  quantity INT NOT NULL DEFAULT 1 CHECK (quantity >= 0)
);

CREATE TABLE IF NOT EXISTS loans (
  id SERIAL PRIMARY KEY,
  material_id INT NOT NULL REFERENCES materials(id) ON DELETE CASCADE,
  borrower_name VARCHAR(150) NOT NULL,
  loan_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  return_date TIMESTAMP WITH TIME ZONE
);
-- Esta nota crea las tablas 'materials' y 'loans' si no existen ya.
-- La tabla 'materials' almacena los materiales disponibles con su cantidad.
-- La tabla 'loans' registra los préstamos realizados, vinculando cada préstamo a un material específico.

-- Index para consultas rápidas
CREATE INDEX IF NOT EXISTS idx_loans_material ON loans(material_id);
CREATE INDEX IF NOT EXISTS idx_loans_return_date ON loans(return_date);
CREATE INDEX IF NOT EXISTS idx_materials_name ON materials(name);
